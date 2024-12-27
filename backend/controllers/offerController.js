const db = require('../config/db');


//Membuat data offer yang baru
exports.createOffer = async (req, res) => {
	const {hotelID , roomID , price , bookingDate, dayOfreservation } = req.body;
	const inputData = await new Promise((resolve,reject)=>{
		db.con.query("INSERT INTO TABLE offers(hotelID,roomID,price,bookingDate,dayOfreservation) VALUES (?,?,?,?,?)",
		[hotelID , roomID , price , bookingDate, dayOfreservation] , (err,data) => {
			if(err) return reject(err);
			resolve(data);
		});
	});
	
	if(data){res.status(201).json({ message: "Booking created successfully", data: req.body });}
	else{res.status(400).json({message : "Unable to create a new Offer"});}
};

//Mengambil seluruh data offer dari tabel
exports.getOffers = async (req, res) => {
	const {bookingDate,dayOfreservation,regionID} = req.body;
    db.con.query(
	"SELECT off.offerID,off.price,off.bookingDate,off.dayOfreservation, ht.namaHotel,ht.deskripsi,r.regionName FROM offers as off JOIN  hotels as ht ON ht.hotelID = off.hotelID JOIN regions as r ON r.regionID = ht.regionID WHERE off.bookingDate=? AND off.dayOfreservation=? AND ht.regionID = ?"
	,[bookingDate,dayOfreservation,regionID]
	,(err,data) => {
	if (err) console.log(err)
	res.json(data);
})};

//Memperbaharui data offer 

exports.updateOffer = async (req,res) => {
	const {hotelID,roomID,price,bookingDate,dayOfreservation} = req.body;
	const offerID = req.params.id;
	try{
		const update =await new Promise((resolve,reject)=>{ 
		db.con.query("UPDATE offers SET hotelID=(?), roomID=(?), price=(?), bookingDate=(?), dayOfreservation=(?) WHERE offerID = (?)" , 
		[hotelID,roomID,price,bookingDate,dayOfreservation,offerID],(err,data) =>{
			if (err) return reject(err);
			if (data.affectedRows == 0) return reject(new Error('Failed to update offer record'));
			resolve();
		});
	  });
	  
		return res.status(201).json({ message: 'Offer updated successfully' });
	}
	
	catch(error){
		return res.status(500).json({ error : error.message});
	}
	
  
  
};
//Mengambil data offer secara spesifik berdasarkan id 
exports.getofferDetails = async (req, res) => {
	
	const offerData = await new Promise((resolve,reject)=>{
		db.con.query("SELECT * from offers WHERE offerID = (?) LIMIT 1" , [req.params.id] , (err,data) => {
		if (err) return reject(err);
		if (data) resolve(data);
	  });
	}); 
	
	if(offerData.length){return res.status(201).json(offerData[0]);}
	else if(offerData.length == 0){return res.status(400).json({message : "Unable to find the Offer"});}
};


// Menghapus offer oleh admin
exports.deleteOfferByAdmin = async (req, res) => {
	const offerID = req.params.id;
    try {
        const deleteOffer = await new Promise((resolve,reject)=>{
			db.con.query("DELETE FROM offers WHERE offerID = ?" , [offerID] , (err,data) =>{
				if (err) return reject(err);
				if (data.affectedRows == 0) return reject(new Error('Failed to delete Offer from record'));
				resolve();
			});
		});
		return res.status(201).json({ message: 'Offer deleted successfully' });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};