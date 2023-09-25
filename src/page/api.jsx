export const requestUsersWithError = () => {
    return new Promise(() => {
      throw new Error("500, unknown server error");
    });
  };
 
 
  // export const requestUsers = () => {
    export const  users = [
      { name: "Jack", id: 0, age: '26' },
      { name: "Helen", id: 1, age: '36' },
      { name: "Rick", id: 2, age: '44' },
      { name: "Tom", id: 3, age: '45' },
      { name: "Sarah", id: 4, age: '40' },
      { name: "Linda", id: 5, age: '41' },
      { name: "Tom", id: 6, age: '42' },
      { name: "Shief", id: 7, age: '21' },
      { name: "Bred", id: 8, age: '17' },
      { name: "Till", id: 9, age: '2' },
      { name: "Kane", id: 10, age: '55' }
    ]
    // const demo = users.map((item)=>item)
    // const filtered = demo
    //   .filter((v) => {
    //       if (users.name === "" && users.age === "") return true;
    //       const age = parseInt(users.age, 10);
    //       const passedAgeFilter = users.age === "" ? true : age === v.age;
    //       const passedNameFilter =
    //         users.name === "" ||
    //         (users.name &&
    //           users.name.toLowerCase().includes(users.name.toLowerCase()));
    //       return passedAgeFilter && passedNameFilter;
    //     })
  
    //     return new Promise((res,rej)=>{
    //       setTimeout(()=>{
    //         res(filtered);
    //       },2000);
    // console.log(demo);

    //   });
    // };