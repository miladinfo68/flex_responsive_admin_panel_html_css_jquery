var numbers = [1, 2, 3, 4] 
	  console.log(numbers)
	  let total=numbers.reduce((output,inPut,index)=>{
	  	console.log(`output : ${output} inPut : ${inPut} index: ${index}`);
	  	return output+inPut;
	  },10);
	  console.log(total);
	  //@@@@@@@@@@@@@@@@@@@@@@@@@@@

	  var tuple=[[1,2],[3,4],[5,6]]
	  const flatten=tuple.reduce((output,inPut)=>{
	  	// return output.concat(inPut);
	  	return [...output ,...inPut]
	  },[]);
	  console.log(flatten);
	   //@@@@@@@@@@@@@@@@@@@@@@@@@@@

	  var chars = ['a', 'a', 'a', 'b', 'b', 'c', 'a']
	  var repeate=chars.reduce((output,inPut,index)=>{
	  	if(!(inPut in output)) output[inPut]=0;
	  	output[inPut]++;
	  	return output;
	  },{});

	  console.log(repeate);
	   //@@@@@@@@@@@@@@@@@@@@@@@@@@@

	  	var numbersList = [1, 2, 3, 4, 4, 1.5]
	  	console.log(numbersList);
	  	let doubled=numbersList.reduce((output ,inPut,index)=>{
	  	    output[index]=inPut*2;
	  		return output
	  	},[]);
		console.log(doubled);
		 //@@@@@@@@@@@@@@@@@@@@@@@@@@@
		const trips = [
			{type: 'car', dist: 42}, 
			{type: 'foot', dist: 3}, 
			{type:'flight', dist: 212}, 
			{type: 'car', dist: 90}, 
			{type: 'foot', dist: 7}
		] 

		console.log(trips)				
		const distanceByType = trips.reduce((output, inPut) => {
		    const { type, dist } = inPut;
		    if (output[type]) {
		        output[type] += dist;
		    } else {
		        output[type] = dist;
		    }
		    return output;
		}, {});
		console.log(distanceByType)
		 //@@@@@@@@@@@@@@@@@@@@@@@@@@@

		 let myobj={"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};
		 let result=Object.keys(myobj).map(k=>[+k,myobj[k]]);
		 console.log(result);
		  //@@@@@@@@@@@@@@@@@@@@@@@@@@@
		const arr = [["Age", "Class", "Group"], ["24", "C", "Prod"], ["25", "A", "Dev"], ["26", "B", "Test"]];

		// const keys = arr.shift();
		// const out = arr.map(arr => arr.reduce((a, el, i) => (a[keys[i]] = el, a), {}))
		// console.log(out)	 


		//const firstEl = arr.shift();
		const restEls=arr.splice(1);
		const resultArr=restEls.reduce((a,el,i)=>{
			return {
				...a,
				[i]:{
					Age:el[0] ,
					Class:el[1] ,
					Group:el[2]
				}
			}
		},{});		
		console.log(resultArr)

		  //@@@@@@@@@@@@@@@@@@@@@@@@@@@
		  const arrobjs=[
		      { id: 111, name: 'John', age: 29 },
		      { id: 112, name: 'Sarah', age: 25 },
		      { id: 122, name: 'Kate', age: 22 },
		      { id: 123, name: 'Tom', age: 21 },
		      { id: 125, name: 'Emma', age: 24 },
		    ];

		    let objOfobjs=arrobjs.reduce((acc,curr,index)=>{
		    	// debugger;
		    	// const {id,name,age}=curr;
		    	//  return { ...acc, [id]: curr };

		    	// const {id,name,age}=curr;
		    	// const arr=[id,name,age]
		    	//  return { ...acc, [id]: arr };

		    	const {id,name,age}=curr;
		    	const obj={id,name,age}
		    	 return { ...acc, [id]: obj };

		    },{});
		    console.log(objOfobjs);


		let obj_={ ingradients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        }}
        // console.log(Object.keys(obj_))
        let nobj=Object.values(obj_)[0];
        console.log(nobj)