import JWT from "jsonwebtoken";

// protect Routes token base


export const requireSignIn = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ error: "Authorization token missing" });
        }

        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Invalid or expired token" });
    }
};


// Admin Middleware
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access: User not found"
            });
        }

        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access"
            });
        }

        next();
    } catch (error) {
        console.log("Admin middleware", error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
};
