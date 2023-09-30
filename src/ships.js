const ships=(len)=>{
    let hits=0;
    const length=len;
    function hit(){
        this.hits+=1;
        return hits;
    }
    function isSunk(){
        if(hit===length)
            return true;
        return false;
    }
    return {length,hits,hit,isSunk};
}
module.exports = ships;
