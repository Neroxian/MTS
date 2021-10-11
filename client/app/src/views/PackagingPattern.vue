<template>
  <div>
      <div class="add p-1">
      <div class="d-flex justify-content-center p-3">
        <form
          style="background-color: white"
          class="p-3 border rounded shadow"
          @submit.prevent="addPackingData()"
        >
        <div class="text-center">
          <h3 class="mt-3 mb-4 borderBtm text-primary">
            Create Packaging Pattern
          </h3>
        </div>
          

          <div class="form-group">
            <label for="category" style="float: left" class="text-dark"
              >Category</label
            ><br />
            <select
              v-model="category"
              class="custom-select custom-select-lg"
              style="padding: 8px 90px; float: left"
            >
              <option value="Academic">Academics</option>
              <option value="Adminitration">Adminitration</option>
              <option value="Marketing Material">Marketing Materials</option>
            </select>
          </div>
          <div class="form-group">
            <label for="text" style="float: left" class="text-dark mt-3"
              >Sub-Category:</label
            >
             <select
              v-model="subCategory"
              class="custom-select custom-select-lg"
              style="padding: 8px 90px; float: left"
            >
              <option value="Academic">Academics</option>
              <option value="Adminitration">Adminitration</option>
              <option value="Marketing Material">Marketing Materials</option>
            </select>
          </div>
          <div class="form-group">
            <label for="material" style="float: left" class="text-dark"
              >Material</label
            ><br />
            <input
              v-model="material"
              type="text"
              class="form-control border border-dark"
              placeholder="Enter material"
              id="material"
            />
            <!-- <textarea name="details" id="details" v-model="details">
              data.details</textarea
            > -->
          </div>
          <div class="form-group">
              <label for="packet" style="float: left" class="text-dark">
                  No. of Packets:</label>
              <input v-model="packet" type="number" id="packet" placeholder="adh..." class="form-control border border-dark">    
          </div>
          <div class="form-group">
              <label for="loose" style="float: left" class="text-dark">
                  No. of loose items:</label>
              <input v-model="loose" type="number" id="loose" placeholder="adh..." class="form-control border border-dark">    
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary">Add material</button>
          </div>
        </form>
      </div>
    </div>


     <div class="container mt-5" ref="table" v-if="items.length > 0">
       <b-table hover :items="packingPattern" :fields="fields" thead-class="thead" class="border">
           <template #cell(actions)="row">
               <b-button variant="success" @click="editRow(row.item)" v-b-modal.modal-1>Edit</b-button>
               <b-button variant="danger"  @click="deleteRow(row.item)" v-b-modal.modal-2 class="mx-3">Delete</b-button>
           </template>
       </b-table>
    </div>

    <b-modal id="modal-1" title="Edit Package" @ok="editPackingData()">
        <form
          style="background-color: white"
          class="p-3 border rounded shadow"
        >
        <div class="text-center">
          <h3 class="mt-3 mb-4 borderBttm text-primary">
            Create Packaging Pattern
          </h3>
          </div>
         

          <div class="form-group">
            <label for="category" style="float: left" class="text-dark"
              >Category</label
            ><br />
            <select
              v-model="dataInEdit.category"
              class="custom-select custom-select-lg"
              style="padding: 8px 90px; float: left"
            >
              <option value="Academic">Academics</option>
              <option value="Adminitration">Adminitration</option>
              <option value="Marketing Material">Marketing Materials</option>
            </select>
          </div>
          <div class="form-group">
            <label for="text" style="float: left" class="text-dark mt-3"
              >Sub-Category:</label
            >
             <select
              v-model="dataInEdit.subCategory"
              class="custom-select custom-select-lg"
              style="padding: 8px 90px; float: left"
            >
              <option value="Academic">Academics</option>
              <option value="Adminitration">Adminitration</option>
              <option value="Marketing Material">Marketing Materials</option>
            </select>
          </div>
          <div class="form-group">
             <label for="material" style="float: left" class="text-dark"
              >Material</label
            ><br />
            <input
              v-model="dataInEdit.material"
              type="text"
              class="form-control border border-dark"
              placeholder="Enter material"
              id="material"
            />
          </div>
           <div class="form-group">
              <label for="packet" style="float: left" class="text-dark">
                  No. of Packets:</label>
              <input v-model="dataInEdit.packet" type="number" id="packet" placeholder="adh..." class="form-control border border-dark">    
          </div>
          <div class="form-group">
              <label for="loose" style="float: left" class="text-dark">
                  No. of loose items:</label>
              <input v-model="dataInEdit.loose" type="number" id="loose" placeholder="adh..." class="form-control border border-dark">    
          </div>
        </form>  
    </b-modal>

    <b-modal id="modal-2" title="Are You sure you want to delete this ?" @ok="deletePackingData()">
    </b-modal>


  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    data() {
        return {
            dataInDelete: [],
            dataInEdit: [],
            activeColor: "blue",
            fields: ['category', 'subCategory', 'material', 'packet', 'loose', 'actions'],
            items: [],
            category: "",
            subCategory: "",
            material: "",
            packet: 0,
            loose: 0,
        }
    },
    methods: {
        addPackingData() {
            this.addPackagingpattern({
                category: this.category,
                subCategory: this.subCategory,
                material: this.material,
                packet: this.packet,
                loose: this.loose,
                id: Date.now()
            })
            this.$refs.table.scrollIntoView({})
        },
        editRow(data) {
           this.dataInEdit = data
        },
        // okBro() {
        // alert("Okkkkkk")
        // },
        editPackingData() {
            this.editPackagingDataMutation(this.dataInEdit)
        },
        deleteRow(dData) {
            // console.log(dData)
            this.dataInDelete = dData
        },
        deletePackingData() {
          this.DeletePackagingDataMutation(this.dataInDelete)
        },
    ...mapMutations("moda", [
      "editPackagingDataMutation",
      "DeletePackagingDataMutation",
      "addPackagingpattern",
      "deteteTask",
      "changeTask",
      "addMaterial",
      "markAsRecieved",
      "addDisData",
      "addMatData",
    ]),
    },
    created() {
        console.log(this.packingPattern)
        this.items = this.packingPattern
    },
    computed: {
    ...mapState("moda", {
        task: state => state.task,
        packingPattern: state => state.packingPattern
    }),
  },
}
</script>

<style>
.thead {
    /* color: red; */
    background-color: rgb(2, 117, 216);
    color:white;
}

.borderBtm {
  font-weight: bold;
}

</style>