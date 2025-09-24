let schools=[
  {
    id:1,
    name: "HMC",
    class: "+2",
  },
  {
    id:2,
    name:"DAV",
    class: "10",
  },
];



const createSchool = (req, res) => {
    const { name,Class } = req.body;
    const newSchool = { id: schools.length +1 , name,Class };
    
    users.push(newSchool); 
    console.log(schools); 
    
    res.json(newSchool);
};
const getSchool = (req, res) =>{
    res.send (schools);
};

const getSchoolById = (req,res)=>{

const school = schools.find((s) => s.id === parseInt(req.params.schoolid));
  if (!school) {
    return res.json({
      message: "school not found",
    });
  }
  res.json(school);
};
const deleteSchool = (req,res)=>{

 schools = schools.filter((s) => s.id !== parseInt(req.params.id));
    console.log(schools)
    res.json({message:"school deleted"});
};
export {createSchool,getSchool,getSchoolById,deleteSchool};

