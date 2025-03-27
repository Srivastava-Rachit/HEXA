import adminModal from "../modals/adminModal.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';

// LOGIN ADMIN
const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // CHECK IF ADMIN IS AVAILABLE WITH THIS EMAIL
        const admin = await adminModal.findOne({ email });
        if (!admin) {
            return res.json({ success: false, message: "Admin Doesn't Exist" });
        }

        // MATCHING ADMIN PASSWORD
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" });
        }

        // IF PASSWORD MATCHES, GENERATE TOKEN
        const token = createToken(admin._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

// REGISTER ADMIN
const registerAdmin = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // CHECK IF ADMIN ALREADY EXISTS
        const exists = await adminModal.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "Admin Already Exists" });
        }

        // VALIDATE EMAIL FORMAT
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please Enter A Valid Email" });
        }

        // ENSURE PASSWORD IS STRONG
        if (password.length < 8) {
            return res.json({ success: false, message: "Please Enter A Strong Password" });
        }

        // HASH ADMIN PASSWORD
        const salt = await bcrypt.genSalt(15);
        const hashedPassword = await bcrypt.hash(password, salt);

        // CREATE NEW ADMIN
        const newAdmin = new adminModal({
            name,
            email,
            password: hashedPassword
        });
        
        // SAVE ADMIN IN THE DATABASE
        const admin = await newAdmin.save();

        // CREATE TOKEN AND SEND IT TO ADMIN
        const token = createToken(admin._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { loginAdmin, registerAdmin }
