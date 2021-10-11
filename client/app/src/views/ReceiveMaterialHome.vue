<template>
    <div class="main-div container">
        <div>
        <div class="row">
            <div class="col-7"><h2 class="text-start">Received Material from Vendor</h2></div>
            <div class="col-5">
                <div class="text-end mb-3"><button @click="showForm" class="btn btn-success">Add Entry</button></div>
            </div>
        </div>
        <!-- {{getReceiveMaterial}} -->
            <table class="table table-hover ">
                <thead class="table-dark">
                    <tr>
                    <th scope="col">Sr no</th>
                    <th scope="col">Material</th>
                    <th scope="col">Category</th>
                    <th scope="col">Sub-Category</th>
                    <th scope="col">Received on</th>
                    <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vendor,idx in getReceiveMaterial" :key="idx">
                    <td>{{idx+1}}</td>
                    <td>{{vendor.material}}</td>
                    <td>{{vendor.category}}</td>
                    <td>{{vendor.subCategory}}</td>
                    <td>{{vendor.doReceipt}}</td>
                    <td>{{vendor.quantity}}</td>
                    </tr>
                </tbody>
            </table>

            <!-- <b-table
            class="m-0"
            id="my-table"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            thead-class="thead"
            small bordered hover
            ></b-table>
            
            <b-pagination
            class="paginationStyle"
            align="center"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            ></b-pagination> -->

        </div>

        <div class="entry-form mt-5 mb-4" v-if="show">
            <h2 class="text-center mb-4">Add Received Material Details</h2>
            <form @submit.prevent="add">
                <div class="row">
                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Vendor :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="vendorName" aria-label="Default select example">
                                <option value="Ramesh">Ramesh</option>
                                <option value="Suresh">Suresh</option>
                                <option value="Rahul">Rahul</option>
                                <option value="Chirag">Chirag</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Material :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="material" aria-label="Default select example">
                                <option value="KYP Books">KYP Books</option>
                                <option value="MSCIT Certificate">MSCIT Certificate</option>
                                <option value="Pamplets">Pamplets</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Category :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="category" aria-label="Default select example">
                                <option value="Academic">Academic</option>
                                <option value="Marketing Mateerial">Marketing Mateerial</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Sub Category :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="subCategory" aria-label="Default select example">
                                <option value="Certificate">Certificate</option>
                                <option value="Study/Material">Study/Material</option>
                                <option value="Inspirational Books">Inspirational Books</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">PO No. :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="text" v-model="PoNo" class="form-control">
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">PO Date :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="date" v-model="PoDate" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Challan No. :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="text" v-model="challanNo" class="form-control">
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Date of Receipt :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="date" v-model="doReceipt" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Quantity Received :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="text" v-model="quantity" class="form-control">
                        </div>
                    </div>

                    <!-- <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">PO Date. :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="date" v-model="vendorName" class="form-control">
                        </div>
                    </div> -->
                </div>
                <div class="row mt-3">
                    <h5 class="m-0">Box</h5>
                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Count :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Series :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <textarea type="text" v-model="bSeries" rows="1" class="form-control"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <h5 class="m-0">Packet</h5>
                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Count :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Series :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <textarea type="text" v-model="pSeries" rows="1" class="form-control"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <h5 class="m-0">Loose Items</h5>
                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Count :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Series :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <textarea type="text" v-model="lSeries" rows="1" class="form-control"></textarea>
                        </div>
                    </div>
                </div>
                <div class="text-center m-2"><button type="submit" class="btn btn-success ">Add</button></div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.main-div{
    margin: auto;
}
th,td{
    font-weight: 500;
    border: 0.001rem solid rgb(138, 138, 138);
}
label{
    margin-bottom: 0;
}
h2,h5{
    font-weight: 600;
    /* text-align: center; */
}
.entry-form{
    margin: auto;
    width: 80%;
    padding: 2.5rem;
    border-radius: 0.5rem;
    border: 0.002rem solid rgb(189, 189, 189);
    /* background-color: rgba(236, 236, 236, 0.836); */
    box-shadow: 0px 0px 21px 0px rgba(0,0,0,0.50);
-webkit-box-shadow: 0px 0px 21px 0px rgba(0,0,0,0.50);
-moz-box-shadow: 0px 0px 21px 0px rgba(0,0,0,0.50);
}
.hide {
    display: none;
}
.form-control:focus,.form-select:focus,button:focus,button:active {
  box-shadow: none;
}
</style>

<script>
import { mapMutations, mapGetters } from "vuex";
// import  getters  from "../store/getters"
// import  mutations  from "../store/mutations"

export default {
    name: 'ReceiveMaterialHome',
    data() {
        return {
            show: false,
            vendorName: '',
            material: '',
            category: '',
            subCategory: '',
            PoNo: '',
            PoDate: '',
            challanNo: '',
            doReceipt: '',
            quantity: '',
            bSeries: '',
            pSeries: '',
            lSeries: '',
        }
    },
    methods:{
        showForm(){
            this.show = !this.show
        },
        add(){
            this.addReceiveMaterial({
                vendorName: this.vendorName,
                material: this.material,
                category: this.category,
                subCategory: this.subCategory,
                PoNo: this.PoNo,
                PoDate: this.PoDate,
                challanNo: this.challanNo,
                doReceipt: this.doReceipt,
                quantity: this.quantity,
                bSeries: this.bSeries,
                pSeries: this.pSeries,
                lSeries: this.lSeries,
            })
            alert("Added Materials into list"),
            this.showForm()
        },
        ...mapMutations(["addReceiveMaterial"])
    },
    computed: {
        ...mapGetters(["getReceiveMaterial"]),
    }
}
</script>