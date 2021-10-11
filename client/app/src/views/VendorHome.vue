<template>
  <div class="Home">
    <div class="row">
      <div class="col-4"><h2 class="">Vendors Details</h2></div>
      <div class="col-5"></div>
      <div class="col-3 mb-3 input-icons">
        <input
          type="search"
          @input="filterName"
          placeholder="Search"
          class="form-control"
        />
      </div>
    </div>
    <!-- {{ filterVendor }} -->
    <!-- {{getAllVendor}} -->
    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Vendor Name</th>
            <th scope="col">Company Type</th>
            <th scope="col">Contact Person</th>
            <th scope="col">Mobile No.</th>
            <th scope="col" style="width: 100%">Address</th>
            <th scope="col">State</th>
            <th scope="col">District</th>
            <th scope="col">Phone 1</th>
            <th scope="col">Phone 2</th>
            <th scope="col">Fax Number</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="table-light text-center" v-if="filterVendor.length === 0">
          <td colspan="13" style="font-size: 1.5rem; font-weight: 600; color:red;border:1px solid black">
            No data to display
          </td>
        </tbody>
        <tbody class="" v-else>
          <tr v-for="(vendor, idx) in filterVendor" :key="idx">
            <td>
              <b>{{ vendor.id }}</b>
            </td>
            <td>{{ vendor.vendorName }}</td>
            <td>{{ vendor.companyType }}</td>
            <td>{{ vendor.organisationName }}</td>
            <td>{{ vendor.organisationMobile }}</td>
            <td>{{ vendor.address1 }}</td>
            <td>{{ vendor.state }}</td>
            <td>{{ vendor.district }}</td>
            <td>{{ vendor.telephone1 }}</td>
            <td>{{ vendor.telephone2 }}</td>
            <td>{{ vendor.faxNumber }}</td>
            <td>{{ vendor.email }}</td>
            <td>
              <router-link
                :to="`/vendorEdit/${idx}`"
                class="btn btn-outline-primary m-1"
                ><i class="fas fa-pencil-alt"></i></router-link
              ><button
                @click.prevent="del(idx)"
                class="btn btn-outline-danger m-1"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <router-link to="/vendorAdd" class="btn btn-success m-3"
        >Add Vendor </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
// import  getters  from "../store/getters"

export default {
  name: "VendorHome",
  data() {
    return {
      filterVendor: [],
    };
  },
  mounted() {
    this.filterVendor = this.getAllVendor;
    // console.log(this.filterVendor);
  },
  methods: {
    filterName(e) {
      // this.filterVendor = this.getAllVendor;
      if (!e.target.value || !e.target.value.trim()) {
        this.filterVendor = this.getAllVendor;
        return;
      }
      this.filterVendor = this.getAllVendor.filter((vendor) => {
        if (
          vendor.vendorName
            .toLowerCase()
            .match(e.target.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    },
    del(idx){
        this.deleteVendor(idx)
    },
    ...mapMutations(["deleteVendor"])

  },
  computed: {
    ...mapGetters(["getAllVendor"]),
  },
};
</script>

<style scoped>
/* .Home {
  margin: 3.5rem;
  border: 0.02rem solid black;
} */
button {
  margin: 0 5px 0 5px;
}
th {
  font-weight: 100;
  vertical-align: middle;
}
h2 {
  font-weight: 600;
}
.input-icons i {
  position: absolute;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 0.7rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border: 0.01rem solid rgb(117, 117, 117);
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(158, 158, 158);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>