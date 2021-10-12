<template>
  <div>
    <div class="add p-1">
      <div class="d-flex justify-content-center p-3">
        <form
          style="background-color: white"
          class="p-4 border rounded shadow"
          @submit.prevent="addSMC()"
        >
         
         <div class="text-center">
          <h3 class="mt-3 mb-3 borderBtm text-dark">
            Materials Category Selection
          </h3>
        </div>
         

          <div class="form-group">
            <label for="category" style="float: left" class="text-dark">Category</label><br/>
            <select
              v-model="category"
              class="custom-select custom-select-lg"
              style=" float: left"
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
            <input
              v-model="material"
              type="text"
              class="form-control border "
              placeholder="Enter material"
              id="text"
            />
          </div>
          <div class="form-group">
            <label for="details" style="float: left" class="text-dark"
              >Sub-Category Details:</label
            ><br />
            <textarea name="details" id="details" class="form-control" rows="3" v-model="details">
              data.details</textarea
            >
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-success">Add material</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column align-items-center">
      <div id="posts" class="mt-5">
        <h3 class="text-dark borderBtm">Previously Added Materials</h3>
      </div>
    </div>

    <!-- <input type="text" @input="search" placeholder="" /> -->
    <div class="input-group" id="searchBar">
      <input
        @input="search"
        type="text"
        class="form-control"
        placeholder="Search categories and details.."
      />
      <div class="input-group-append border">
        <!-- <button class="btn btn-primary" type="button">OK</button> -->
        <i
          class="fas fa-search px-2 pt-2"
          style="color: black; font-size: 20px"
        ></i>
      </div>
    </div>

    <div class="container mt-2" id="addedMaterial" ref="table">
      <!-- {{ filteredTask }} -->
      <table class="table table-bordered table-hover">
        <thead class="designTable table-dark">
          <tr>
            <th>Sr No.</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody v-for="(itm, idx) in filteredTask" :key="itm.task">
          <tr>
            <td>{{ idx + 1 }}</td>
            <td>{{ itm.category }}</td>
            <!-- <td>{{ idx + 1 }}</td> -->
            <td>{{ itm.material }}</td>
            <td>{{ itm.details }}</td>
            <!-- <td>
              <router-link :to="`/editsub/${itm.id}`" style="color: white"
                ><button class="btn btn-primary">Edit</button></router-link
              >
            </td> -->
            <td class="text-center">
              <button @click="openModal(itm.id)" class="btn btn-success">
                Edit
              </button>
            </td>
            <td class="text-center">
              <button @click="deleteObj(itm.id)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>

        <div class="overlay" v-if="isModalOpen">
          <div tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <h3 class="text-center  borderBtm text-primary">
                    Edit category details..
                  </h3>
                  <form
                    style="background-color: white"
                    class="p-3 border"
                    @submit.prevent="update()"
                  >
                    <div class="form-group">
                      <label for="text" style="float: left" class="text-dark"
                        >Sub-Category:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        :placeholder="materialToBeUpdated.material"
                        v-model="materialToBeUpdated.material"
                        id="text"
                      />
                    </div>
                    <div class="form-group">
                      <label for="details" style="float: left" class="text-dark"
                        >Sub-Category Details:</label
                      ><br />
                      <textarea
                        name="details"
                        id="details"
                        v-model="materialToBeUpdated.details"
                      >
              materialToBeUpdated.details</textarea
                      >
                    </div>

                    <!-- <button type="submit" class="btn btn-dark"> -->
                    <!-- <router-link to="/about" style="color: white">Submit</router-link> -->
                    <button
                      type="button"
                      class="btn btn-dark border"
                      @click="isModalOpen = false"
                    >
                      Submit
                    </button>
                    <button
                      class="btn btn-danger text-light mx-4"
                      @click="isModalOpen = false"
                    >
                      Close
                    </button>
                    <!-- </button> -->
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </table>
      <!-- Modal -->
      <b-modal ref="delete-modal" title="Confirm delete?" hide-footer centered>
        <div>
          <p>Are you sure?</p>
        </div>
        <div>
          <b-button
            variant="danger"
            size="sm"
            class="mr-1"
            @click="deleteMaterial"
            >Delete</b-button
          >
          <b-button
            variant="secondary"
            size="sm"
            @click="$refs['delete-modal'].hide()"
            >Close</b-button
          >
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
// import EdituSCM from "@/views/EdituSCM.vue";
import { mapMutations, mapState } from "vuex";
import { BModal } from "bootstrap-vue";

export default {
  data() {
    return {
      x: false,
      category: "",
      material: "",
      details: "",
      isModalOpen: false,
      materialToBeUpdated: null,
      filteredTask: [],
      alertMsg: false,
      isDeleteModalOpen: true,
      toBeDeleted: null,
    };
  },
  components: {
    "b-modal": BModal,
  },
  created() {
    console.log(this.task);
    this.filteredTask = this.task;
  },
  methods: {
    openModal(id) {
      this.materialToBeUpdated = this.task.find((t) => t.id === id);
      this.isModalOpen = !this.isModalOpen;
    },
    addSMC() {
      this.addMaterial({
        material: this.material,
        details: this.details,
        category: this.category,
        id: Date.now(),
      });
      this.$refs.table.scrollIntoView();
      console.log(this.task);
    },
    deleteObj(itemID) {
      this.toBeDeleted = itemID;
      this.$refs["delete-modal"].show();
    },
    deleteMaterial() {
      this.deteteTask(this.toBeDeleted);
      this.$refs["delete-modal"].hide();
    },
    update() {
      this.changeTask(this.materialToBeUpdated);
      this.$router.push("/material");
    },
    search(e) {
      if (!e.target.value || !e.target.value.trim()) {
        this.filteredTask = this.task;
        return;
      }
      this.filteredTask = this.task.filter((t) => {
        if (
          t.material.toLowerCase().match(e.target.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
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
  computed: {
    ...mapState("moda", {
      task: (state) => state.task,
    }),
  },
};
</script>

<style scoped>
label{
  margin-bottom: 0;
  font-weight: 600;
}
.borderBtm {
  font-weight: bold;
}
th{
  font-weight: 500;
}
td{
  vertical-align: middle;
}

/* .form-group {
  margin: 20px;
} */

.add {
  /* background-color: rgb(225, 238, 238); */
  background-color: white;
}


.designTable {
  background-color: rgb(2, 117, 216);
  color: white;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(36, 35, 35, 0.25);
}

#searchBar {
  width: 40%;
  margin: auto;
}

#alert {
  position: fixed;
  top: 5px;
  width: 100vw;
  background-color: aqua;
}

@media (max-width: 970px) {
  .input-group-append {
    display: none;
  }

  #searchBar {
    padding: 0px 30px;
  }
}
</style>