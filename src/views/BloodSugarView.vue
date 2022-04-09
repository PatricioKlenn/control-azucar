<template>
  <div>
    <H2>👋 Hola {{ user.displayName }} 🥰</H2>
    <hr />
    <!-- Button trigger modal -->
    <div class="text-center">
      <button
        @click="loadDefault()"
        type="button"
        class="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addRecord"
      >
        Agregar Registro 👉
      </button>
    </div>
    <hr />
    <h3>Historial</h3>
    <div v-if="data.length > 0">
      <div
        v-for="(row, index) in data"
        :key="index"
        @click="loadData(row)"
        data-bs-toggle="modal"
        data-bs-target="#addRecord"
        class="card mt-1 shadow-sm bg-body rounded"
      >
        <div class="card-body">
          <p class="text-secondary">{{ row.createdAt }} ⌚</p>
          <p>
            <strong>{{ row.schedule }} ⏱️ </strong> {{ row.value }} mg/dl🩸
          </p>
        </div>
      </div>
      <div class="text-center mt-3">
        <button
          v-if="page != 1"
          @click="previous()"
          class="btn btn-primary btn-sm"
        >
          👈 Anterior
        </button>
        &nbsp; &nbsp;
        <button @click="next()" class="btn btn-primary btn-sm">
          Siguiente 👉
        </button>
      </div>
    </div>
    <div v-else class="text-center"><h3>No hay datos! 😔</h3></div>

    <div v-if="loading" class="text-center mt-3">
      <div
        class="spinner-border text-primary"
        style="width: 3rem; height: 3rem"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="addRecord"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="addRecordLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addRecordLabel">Agregar Registro 🩸</h5>
          </div>
          <div class="modal-body">
            <p class="text-secondary mb-3">{{ record.createdAt }} ⌚</p>
            <select
              v-model="record.schedule"
              class="form-select form-select-sm"
            >
              <option
                v-for="(schedule, index) in schedules"
                v-bind:key="index"
                :value="schedule"
              >
                {{ schedule }}
              </option>
            </select>
            <div class="input-group input-group-sm mb-3 mt-3">
              <input
                v-model="record.value"
                @keypress="isNumber($event)"
                type="number"
                class="form-control"
                aria-describedby="value"
              />
              <span class="input-group-text" id="value">mg/dl</span>
            </div>
            <button
              v-if="isEditing"
              @click="destroy(record.id)"
              class="btn btn-danger btn-sm"
              data-bs-dismiss="modal"
            >
              Eliminar 🗑️
            </button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              Cancelar 👎
            </button>
            <button
              @click="save()"
              class="btn btn-primary btn-sm"
              data-bs-dismiss="modal"
            >
              Guardar 👍
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  setDoc,
  orderBy,
  query,
  doc,
  limit,
  limitToLast,
  startAfter,
  endBefore,
  where,
} from "firebase/firestore/lite";
import moment from "moment";
import { db } from "../main";
export default {
  mounted() {
    this.getRecords();
  },
  data() {
    return {
      user: this.$store.getters.user,
      schedules: [
        "Ayuna",
        "+2 hrs Ayuna",
        "Desayuno",
        "+2 hrs Desayuno",
        "Almuerzo",
        "+2 hrs Almuerzo",
        "Cena",
        "+2 hrs Cena",
      ],
      record: {},
      data: [],
      isEditing: false,
      loading: true,
      //Pagination
      lastVisible: null,
      firstVisible: null,
      page: 1,
    };
  },
  methods: {
    async getRecords() {
      this.data = [];

      const q = query(
        collection(db, "registros"),
        where("userId", "==", this.user.uid),
        orderBy("createdAt", "desc"),
        limit(10)
      );

      const querySnapshot = await getDocs(q);
      this.firstVisible = querySnapshot.docs[0];
      this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      querySnapshot.forEach((doc) => {
        let record = doc.data();
        record.id = doc.id;
        record.createdAt = moment(record.createdAt.toDate()).format(
          "DD/MM/YYYY HH:mm"
        );
        this.data.push(record);
      });

      this.loading = false;
    },
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    async previous() {
      const previous = query(
        collection(db, "registros"),
        orderBy("createdAt", "desc"),
        endBefore(this.firstVisible),
        limitToLast(10)
      );

      const querySnapshot = await getDocs(previous);
      if (!querySnapshot.empty) {
        this.data = [];
        this.firstVisible = querySnapshot.docs[0];
        this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        querySnapshot.forEach((doc) => {
          let record = doc.data();
          record.id = doc.id;
          record.createdAt = moment(record.createdAt.toDate()).format(
            "DD/MM/YYYY HH:mm"
          );
          this.data.push(record);
        });
        this.page--;
      }
    },
    async next() {
      const next = query(
        collection(db, "registros"),
        orderBy("createdAt", "desc"),
        startAfter(this.lastVisible),
        limit(10)
      );

      const querySnapshot = await getDocs(next);
      if (!querySnapshot.empty) {
        this.data = [];
        this.firstVisible = querySnapshot.docs[0];
        this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        querySnapshot.forEach((doc) => {
          let record = doc.data();
          record.id = doc.id;
          record.createdAt = moment(record.createdAt.toDate()).format(
            "DD/MM/YYYY HH:mm"
          );
          this.data.push(record);
        });
        this.page++;
      }
    },
    async save() {
      if (this.record.value) {
        const docRef = await addDoc(collection(db, "registros"), {
          schedule: this.record.schedule,
          value: this.record.value,
          userId: this.user.uid,
          createdAt: new Date(),
        })
          .then(() => {
            this.getRecords();
          })
          .catch(function (error) {
            console.error("Error al añadir el documento: ", error);
          });
      }
    },
    async update() {
      await setDoc(doc(db, "registros", this.record.id), {
        schedule: this.record.schedule,
        value: this.record.value,
        createdAt: new Date(),
      });
      this.getRecords();
    },
    loadData(record) {
      this.isEditing = true;
      this.record = record;
    },
    async destroy(id) {
      await deleteDoc(doc(db, "registros", id));
      this.getRecords();
    },
    loadDefault() {
      this.isEditing = false;
      this.record = {
        schedule: "Ayuna",
        value: null,
        createdAt: moment(new Date()).format("DD/MM/YYYY HH:mm"),
      };
    },
  },
};
</script>

<style>
p {
  margin-bottom: 0px !important;
}
</style>
