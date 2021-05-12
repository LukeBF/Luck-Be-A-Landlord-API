//Export validation
exports.validateItems = (req,res,next)=>{

    const errors = [];
    const rarity = ["common","uncommon","rare","very rare"]

    if(req.body.name == "")
    {
        errors.push("You must enter a name")
    }

    if(req.body.rarity !== rarity.includes("common","uncommon","rare","very rare"))
    {
        errors.push("You can only enter a rarity of common, uncommon, rare or very rare")
    }

    if(isNaN(req.body.goldPerTurn))
    {
        errors.push("You can only enter a number (positive or negative)")
    }

    if(errors.length == 0)
    {
        next();
    }

    else
    {
        res.status(400).json({
            message: "Fix errors before moving on",
            errors
        })    
    }

}