<template>
  <div class="Add mt-5 mb-5">
    <h2 class="mb-0 text-center">Edit Vendor</h2>
    <!-- {{data}} -->
    <form @submit.prevent="edit" class="p-3" v-if="data">
      <!-- First Form -->
      <div :class="{ hide: currentStep !== 0 }">
        <h6 class="mb-4 text-center">
          <b>Vendor Details</b> > Contact Details > Vendor Contact
        </h6>
        <div class="row align-items-center">
          <div class="mb-4 col-3">
            <label class="form-label">Vendor Name:</label>
          </div>
          <div class="mb-4 col-9">
            <input type="text" v-model="data.vendorName" class="form-control" />
          </div>
        </div>

        <div class="row align-items-center">
          <div class="mb-4 col-3">
            <label class="form-label">Company Type :</label>
          </div>
          <div class="mb-4 col-9">
            <select
              class="form-select"
              v-model="data.companyType"
              aria-label="Default select example"
            >
              <option selected>--Select--</option>
              <option value="Industrial">Industrial</option>
              <option value="Printing">Printing</option>
              <option value="Technology">Technology</option>
              <option value="Pvt. Ltd.">Pvt. Ltd.</option>
            </select>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="mb-4 col-3">
            <label class="form-label">Pan Number :</label>
          </div>
          <div class="mb-4 col-9">
            <input type="text" v-model="data.panNumber" class="form-control" />
          </div>
        </div>

        <div class="row align-items-center">
          <div class="mb-4 col-3">
            <label class="form-label">Account Number :</label>
          </div>
          <div class="mb-4 col-9">
            <input
              type="text"
              v-model="data.accountNumber"
              class="form-control"
            />
          </div>
        </div>
        <div class="text-end">
          <button @click.prevent="nextStep" class="next btn btn-primary">
            Next <i class="fas fa-arrow-right m-1"></i>
          </button>
        </div>
      </div>

      <!-- Second Form -->
      <div :class="{ hide: currentStep !== 1 }">
        <h6 class="mb-4 text-center">
          <span style="opacity: 70%">Vendor Details</span> >
          <b>Contact Details</b> > Vendor Contact
        </h6>
        <div class="row align-items-center">
          <div class="mb-4 col-3">
            <label class="form-label">Organisation Name:</label>
          </div>
          <div class="mb-4 col-9">
            <input
              type="text"
              v-model="data.organisationName"
              class="form-control"
            />
          </div>
        </div>

        <div class="row align-items-center">
          <div class="mb-4 col-3">
            <label class="form-label">Role :</label>
          </div>
          <div class="mb-4 col-9">
            <select
              class="form-select"
              v-model="data.role"
              aria-label="Default select example"
            >
              <option selected>--Select--</option>
              <option value="Admin">Admin</option>
              <option value="RM">RM</option>
              <option value="RM">LLC</option>
              <option value="ALC">ALC</option>
            </select>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="mb-4 col-3">
            <label class="form-label">Mobile No. :</label>
          </div>
          <div class="mb-4 col-9">
            <input
              type="text"
              v-model="data.organisationMobile"
              class="form-control"
            />
          </div>
        </div>

        <div class="flex-contianer">
          <button @click.prevent="prevStep" class="next btn btn-primary">
            Previous <i class="fas fa-arrow-left m-1"></i></button
          ><button @click.prevent="nextStep" class="next btn btn-primary">
            Next <i class="fas fa-arrow-right m-1"></i>
          </button>
        </div>
      </div>

      <!-- Third Form -->
      <div :class="{ hide: currentStep !== 2 }">
        <h6 class="mb-4 text-center">
          <span style="opacity: 70%">Vendor Details</span> >
          <span style="opacity: 70%">Contact Details </span> >
          <b> Vendor Contact</b>
        </h6>
        <div class="row align-items-center">
          <div class="mb-4 col-3">
            <label class="form-label">Address 1:</label>
          </div>
          <div class="mb-4 col-9">
            <textarea
              v-model="data.address1"
              class="form-control"
              rows="2"
            ></textarea>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="mb-4 col-3">
            <label class="form-label">Address 2:</label>
          </div>
          <div class="mb-4 col-9">
            <textarea
              v-model="data.address2"
              class="form-control"
              rows="2"
            ></textarea>
            <!-- <Button class="btn btn-secondary btn-sm mt-1">Same as address 1</Button> -->
          </div>
        </div>

        <div class="row">
          <div class="col-6 align-items-center">
            <div class="col-auto">
              <label class="form-label">State :</label>
            </div>
            <div class="mb-4 col-auto">
              <select
                class="form-select"
                v-model="data.state"
                aria-label="Default select example"
              >
                <option selected>--Select--</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Punjab">Punjab</option>
                <option value="Goa">Goa</option>
                <option value="Bihar">Bihar</option>
              </select>
            </div>
          </div>

          <div class="col-6 align-items-center">
            <div class="col-auto">
              <label class="form-label">District :</label>
            </div>
            <div class="mb-4 col-auto">
              <select
                class="form-select"
                v-model="data.district"
                aria-label="Default select example"
              >
                <option selected>--Select--</option>
                <option value="Palghar">Palghar</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="mb-4 col-3">
            <label class="form-label">Pincode :</label>
          </div>
          <div class="mb-4 col-9">
            <input type="text" v-model="data.pincode" class="form-control" />
          </div>
        </div>

        <div class="row">
          <div class="col-6 align-items-center">
            <div class="col-auto">
              <label class="form-label">Telephone 1 :</label>
            </div>
            <div class="mb-4 col-auto">
              <input
                type="text"
                placeholder="STD - Phone Number"
                v-model="data.telephone1"
                class="form-control"
              />
            </div>
          </div>

          <div class="col-6 align-items-center">
            <div class="col-auto">
              <label class="form-label">Telephone 2 :</label>
            </div>
            <div class="mb-4 col-auto">
              <input
                type="text"
                placeholder="STD - Phone Number"
                v-model="data.telephone2"
                class="form-control"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6 align-items-center">
            <div class="col-auto">
              <label class="form-label">Fax Number :</label>
            </div>
            <div class="mb-4 col-auto">
              <input
                type="text"
                placeholder="STD - Fax Number"
                v-model="data.faxNumber"
                class="form-control"
              />
            </div>
          </div>

          <div class="col-6 align-items-center">
            <div class="col-auto">
              <label class="form-label">Email :</label>
            </div>
            <div class="mb-4 col-auto">
              <input type="email" v-model="data.email" class="form-control" />
            </div>
          </div>
        </div>

        <div class="flex-contianer">
          <button @click.prevent="prevStep" class="next btn btn-primary">
            Previous <i class="fas fa-arrow-left m-1"></i></button
          ><button type="submit" class="next btn btn-success">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
// import  getters  from "../store/getters"
// import  mutations  from "../store/mutations"

export default {
  name: "VendorEdit",
  data() {
    return {
      currentStep: 0,
      data: null,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 2) {
        this.currentStep += 1;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep -= 1;
      }
    },
    edit() {
      this.editVendor({
        newVendor: {
          id: this.data.id,
          vendorName: this.data.vendorName,
          companyType: this.data.companyType,
          panNumber: this.data.panNumber,
          accountNumber: this.data.accountNumber,
          organisationName: this.data.organisationName,
          role: this.data.role,
          organisationMobile: this.data.organisationMobile,
          address1: this.data.address1,
          address2: this.data.address2,
          state: this.data.state,
          district: this.data.district,
          pincode: this.data.pincode,
          telephone1: this.data.telephone1,
          telephone2: this.data.telephone2,
          faxNumber: this.data.faxNumber,
          email: this.data.email,
        },
        idx: this.$route.params.idx
      });
      this.$router.push("/vendorHome");
    },
    ...mapMutations(["editVendor"]),
  },
  computed: {
    ...mapGetters(["getAllVendor"]),
    ...mapGetters(["getID"]),
  },
  mounted() {
    // console.log(this.$route.params.idx)
    this.data = { ...this.getAllVendor[parseInt(this.$route.params.idx, 10)] };
  },
};
</script>

<style scoped>
.Add {
  margin: auto;
  padding: 1.5rem;
  /* border: 0.02rem solid rgb(180, 180, 180); */
  border-radius: 0.5rem;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.836);
  /* height: 75vh;
    overflow-y: auto; */
  box-shadow: 0px 0px 13px 2px rgb(182, 182, 182);
  -webkit-box-shadow: 0px 0px 13px 2px rgb(182, 182, 182);
  -moz-box-shadow: 0px 0px 13px 2px rgb(182, 182, 182);
}
label {
  margin-bottom: 0;
  font-weight: 600;
}

h2,
h6 {
  font-weight: 600;
}
h5 {
  text-align: center;
}
b {
  color: #16a716;
  border-bottom: 2px solid #16a716;
}
.flex-contianer {
  display: flex;
  justify-content: space-between;
}
.hide {
  display: none;
}
input,
select,
textarea {
  border: 0.05rem solid rgb(148, 148, 148);
}
</style>