import express from 'express';
const router = express.Router();


router.get("/", (req, res) => {
    res.send({
        success: true,
        title: "This is example route",
    });
});

export default router;