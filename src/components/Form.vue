<template>
  <div>
    <div class="title">
      <div class="separator"></div>
      <img :src="restaurantLogo" alt="" />
      <div class="separator"></div>
    </div>
    <form class="form">
      <label for="dateInput">Fecha</label>
      <input type="date" id="dateInput" :min="toDay" v-model="selectedDate" />
      <label for="timeInput">Hora</label>
      <input type="time" id="timeInput" step="00:15" :value="selectedTime" />

      <label for="">Personas</label>
      <select v-model="selected">
        <option v-for="index in 10" :value="index" :key="index">
          {{ index }}
        </option>
      </select>
      <p>Si ya estás registrado logueate</p>
      <label for="">Nombre y apellidos</label>
      <input type="text" />
      <label for="">Correo electronico</label>
      <input type="email" />
      <label for="">Teléfono</label>
      <input type="phone" />
      <input type="submit" class="form-button" @submit="submitForm" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  props: {
    restaurantLogo: String,
  },
  components: {},
  computed: {
    toDay() {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.separator {
  flex: 1;
  height: 1px;
  background-color: #ae8a46;
}
.form-button {
  background-color: #ae8a46;
  border: none;
  padding: 0.5rem;
  color: black;
  font-weight: bold;
  cursor: pointer;
}
</style>
