<template lang="html">
  <div ref="printMe">
    <v-btn @click="generatePDF()">generatePDF</v-btn>
    <v-btn @click="generatePDF2Canvas()">generatePDF2Canvas</v-btn>
    
    <!-- OUTPUT -->
    <img :src="output">

  </div>
</template>
 
<script lang="js">
   import jsPDF from 'jspdf';
    // eslint-disable-next-line
   import autoTable from 'jspdf-autotable';

   
  export default  {
    props: [],
    mounted() {
      
    },
    data() {
      return {
        output : null,
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
            
            let columns = [
               {title: 'Title', dataKey: "title"}, 
               {title: 'Description', dataKey: "description"}
            ];
            
            let doc = new jsPDF();
            doc.text('Hello world!', 10, 10);
            doc.autoTable(columns, this.todos);
            doc.save("export.pdf");
        }, async  generatePDF2Canvas(){
            const el = this.$refs.printMe;
            // add option type to get the image version
            // if not provided the promise will return 
            // the canvas.
            const options = {
                type: 'dataURL'
            }
            this.output = await this.$html2canvas(el, options);
            console.log(this.output);

            let doc = new jsPDF();
            doc.addImage(this.output, 'JPEG', 20, 20);
            doc.save("export.pdf");
        }
    },
    computed: {
 
    }
}
</script>