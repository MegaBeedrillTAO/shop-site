async function getInfo(req, res){
    const db = req.app.get('db');
    const menu = await db.info.getMenu();
    const specials = await db.info.getSpecials();
    req.session.info = {
        menu_img: menu[0].menu_img,
        announcments: menu[0].announcments,
        specials: [...specials]
    }

    res.status(200).json(req.session.info);
}


async function editInfo(req, res, next){
    const {menu_img, announcments, specials} = req.body;
    const db = req.app.get('db');
    db.info.deleteSpecials();
    for (let i = 0; i < specials.length; i++){
        await db.info.editInfo(specials[i].content, specials[i].price, menu_img, announcments)
    }
    const menu = await db.info.getMenu();
    const special = await db.info.getSpecials();
    req.session.info = {
        menu_img: menu[0].menu_img,
        announcments: menu[0].announcments,
        specials: [...special]
    }
    res.status(200).json(req.session.info);
    next();
}

module.exports = {
    getInfo,
    editInfo
}