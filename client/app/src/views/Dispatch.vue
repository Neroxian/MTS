<template>
    <div class="container main">
        <h2>Dispatch Details</h2>
        <form @submit.prevent="add" class="pl-3 pr-3">
                <div class="row mt-4">
                    <div class="col-6 align-items-center p-0">
                        <div class="col-auto">
                            <label class="form-label">Through Channel :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="l" aria-label="Default select example">
                                <option value="RM>LLC>ALC">RM>LLC>ALC</option>
                                <option value="RM>LLC>ALC>Learner">RM>LLC>ALC>Learner</option>
                                <option value="RM>MCC>ALC>Learner">RM>MCC>ALC>Learner</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Financial Year :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="L" aria-label="Default select example">
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 align-items-center p-0">
                        <div class="col-auto">
                            <label class="form-label">Country :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="l" aria-label="Default select example">
                                <option value="India">India</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Nepal">Nepal</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">State :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="L" aria-label="Default select example">
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Goa">Goa</option>
                                <option value="Bihar">Bihar</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 align-items-center p-0">
                        <div class="col-auto">
                            <label class="form-label">Dispatch Mode :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="l" aria-label="Default select example">
                                <option value="Regular">Regular</option>
                                <option value="E-Store">E-Store</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">District :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="L" aria-label="Default select example">
                                <option value="Palghar">Palghar</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Thane">Thane</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 align-items-center p-0">
                        <div class="col-auto">
                            <label class="form-label"> Channel partner for Dispatch:</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="l" aria-label="Default select example">
                                <option value="RM">RM</option>
                                <option value="LLC">LLC</option>
                                <option value="MCC">MCC</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Description :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <textarea class="form-control"  rows="3"></textarea>
                        </div>
                    </div>
                </div>
        </form>
        <div class="text-center mt-3 mb-4">
            <button @click="showMaterial" class="btn btn-success">View Material Details</button>
        </div>
        
        <div v-if="showAvailable">
            <hr>
            <h2 class="mt-4">Available Material</h2>
            <table class="table table-bordered table-hover mb-5">
            <thead class="table-dark">
                <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Material</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Certificate</td>
                <td>Academic</td>
                <td>100</td>
                <td class="text-center"><button @click="showDetail" class="btn btn-sm btn-danger">Dispatch</button></td>
                </tr>
            </tbody>
            </table>
        </div>
        
        <div v-if="showDispatch">
        <hr>
        <h2 class="mt-4">Dispatch Details</h2>
        <div>
            <h5>Selected Material : { }</h5>
            <form >
                <div class="row mt-4">
                    <div class="col-6 align-items-center p-0">
                        <div class="col-auto">
                            <label class="form-label">Select Quantity :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="number" class="form-control">
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Select District :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="L" aria-label="Default select example">
                                <option value="Palghar">Palghar</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Thane">Thane</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 align-items-center p-0">
                        <div class="col-auto">
                            <label class="form-label">Select Center :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="L" aria-label="Default select example">
                                <option value="Magitech Computers">Magitech Computers</option>
                                <option value="Ramesh Computers">Ramesh Computers</option>
                                <option value="MKCL Computer lab">MKCL Computer lab</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">Mode of Transportation :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <select class="form-select " v-model="L" aria-label="Default select example">
                                <option value="By Road">By Road</option>
                                <option value="By Courier">By Courier</option>
                                <option value="By Post">By Post</option>
                                <option value="By Hand">By Hand</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-2"><button class="btn btn-lg btn-danger">Dispatch</button></div>
            </form>
        </div>
        </div>

    </div>
</template>

<style scoped>
.main{
    width: 95%;
}
label{
    margin-bottom: 0;
    font-weight: 600;
}
h2{
    font-weight: 600;
}
td{
    vertical-align: middle;
}
</style>

<script>
export default {
    name:'Dispatch',
    data(){
        return{
            showAvailable : false,
            showDispatch : false
        }
    },
    methods:{
        showMaterial(){
            this.showAvailable = !this.showAvailable
            console.log(this.showAvailable)
        },
        showDetail(){
            this.showDispatch = !this.showDispatch
            console.log(this.showDispatch)
        }
    },
    mounted(){
        console.log("Show Material:",this.showAvailable)
        console.log("Show Detail:",this.showDispatch)
    }
}
</script>