class Features{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr; 
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex:this.queryStr.keyword,
                $options: "i"
            }
        } : {}
        //  console.log(keyword);
        this.query =  this.query.find({...keyword})
        return this;
    }
    filter(){
        const queryCopy = {...this.queryStr}
        // console.log(queryCopy);

        //Remove some field for catagory 
        const removeFields = ["keyword","page","limit"]
        removeFields.forEach(key => delete queryCopy[key])
        // console.log(queryCopy);

    //Filter for price and rating
    //  console.log(queryCopy);
     let queryStr =JSON.stringify(queryCopy)
     queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key) => `$${key}`)

     this.query = this.query.find(JSON.parse(queryStr));
    //  console.log(queryStr);
     return this;
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skipPage = resultPerPage * (currentPage - 1);
        this.query = this.query.limit(resultPerPage).skip(skipPage);
        return this;
    }
}
module.exports = Features;