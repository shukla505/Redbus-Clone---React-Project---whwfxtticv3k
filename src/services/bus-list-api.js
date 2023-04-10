const BusListApi = {
    fetchAllBuses: async () => {
      const res = await fetch(
        "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
      );
      const result =  res.json();
      return result;
    },
    // fetchBusById: async (busId) => {

    //   const res = await fetch(
    //     `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses/${busId}`
    //   )
    //   const result = await res.json()
    //   console.log(result);
    //   return result
    // },
     fetchBusByName: async (query) => {
      const res = await fetch (`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`)
      const result = await res.json()
      const r= result.filter((item) => (item.busName === query))
      // console.log(r);
      return r;
     },
    fetchBusBySearchQuery: async (query) => {
      const res = await fetch(
        `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`
      );
      const result = await res.json()
      return result.filter(
        (item) =>
          item.source.toLowerCase().includes(query.src) &&
          item.destination.toLowerCase().includes(query.dest)
      );
    }
  };
  
  export { BusListApi };
  