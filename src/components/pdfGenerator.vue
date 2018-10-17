<template lang="html">
  <div>
    <v-btn @click="generatePDF()">generatePDF</v-btn>
  </div>
</template>
 
<script lang="js">
   import jsPDF from 'jspdf';
   
  export default  {
    props: [],
    mounted() {
      
    },
    data() {
      return {
        todos:[
            {title: 'Title 1', description: 'description 1'},
            {title: 'Title 2', description: 'description 2'},
            {title: 'Title 3', description: 'description 3'},
        ]
      }
    },
    methods: {
        generatePDF(){
            console.log("Generando pdf...");
            
            // eslint-disable-next-line
            let columns = [
               {title: 'Title', dataKey: "title"}, 
               {title: 'Description', dataKey: "description"}
            ];
            
            let doc = new jsPDF();
            doc.text('Hello world!', 10, 10);
            //doc.autoTable(columns, this.todos);
            doc.save("export.pdf");
        }
    },
    computed: {
 
    }
}
</script>