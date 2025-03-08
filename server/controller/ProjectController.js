const projectmodel = require("../model/ProjectModel")
const store = async (req, res) => {
    console.log(req.body);

    const { wedding_name, Package, Date, Mobile_Number, months, days, hours, miniutes, pin } = req.body
    const project = await projectmodel.create({
        wedding_name,
        Package,
        Date,
        Mobile_Number,
        months,
        days,
        hours,
        miniutes,
        pin
    })
    res.json("inserted.......")
}

const index = async (req, res) => {
    const project = await projectmodel.find();
    res.json({
        success: true,
        project
    })
}

const trash = async (req, res) => {
    const { id } = req.params;
    const project = await projectmodel.findByIdAndDelete(id)
    // res.json("record delete")
    res.redirect('/Pending')
}

const edit = async (req, res) => {
    const { id } = req.params
    const {wedding_name, Package, Mobile_Number, months, days, hours, miniutes, pin} = req.body
    await projectmodel.findByIdAndUpdate(
        {
            _id: id
        },
        {
            wedding_name, Package, Mobile_Number, months, days, hours, miniutes, pin
        }
    )
    res.json({
        message:"updated...."
    })
}


module.exports = { store, index, trash, edit }