const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    outputFullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmüller';
    },
    add(num) {
      console.log('Runnnig add...');
      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log('Runnnig reduce...');
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
