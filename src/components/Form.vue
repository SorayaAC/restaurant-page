<template>
  <div>
    <div class="title">
      <div class="separator"></div>
      <img :src="restaurantLogo" alt="Restaurant Logo" class="separatorLogo" />
      <div class="separator"></div>
    </div>
    <form class="form">
      <div class="form-columns-container">
        <div class="form-column">
          <p></p>
          <label for="dateInput">Fecha</label>
          <input
            type="date"
            id="dateInput"
            :min="toDay"
            v-model="selectedDate"
          />

          <label for="timeInput">Hora</label>
          <input
            type="time"
            id="timeInput"
            step="00:15"
            :value="selectedTime"
          />

          <label for="">Personas</label>
          <select v-model="selected">
            <option v-for="index in 10" :value="index" :key="index">
              {{ index }}
            </option>
          </select>
          <p>*Para grupos numerosos, llámanos.</p>
        </div>

        <div class="form-column">
          <label for="">Nombre y apellidos</label>

          <input type="text" />
          <label for="">Correo electronico</label>
          <input type="email" />
          <label for="">Teléfono</label>
          <input type="phone" />
          <p>¿Ya tienes una cuenta? Inicia sesión <span>aquí</span></p>
        </div>
      </div>

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
  margin-top: 50px;
}
.form-columns-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-column {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}
.form-button {
  background-color: #ae8a46;
  border: none;
  margin: 3rem 0 3rem 0;
  padding: 0.5rem;
  color: black;
  font-weight: bold;
  cursor: pointer;
  width: 7rem;
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
.separatorLogo {
  width: 11.5rem;
  height: 8rem;
}

input[type='date'],
input[type='time'],
select,
input[type='text'],
input[type='email'],
input[type='phone'] {
  width: 18rem;
  padding: 0.5rem;
  margin: 0.2rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

@media (min-width: 768px) {
  .form-columns-container {
    flex-direction: row;
  }
}

@media (min-width: 1000px) {
  .form-column {
    margin: 0 4rem;
  }
}
</style>
