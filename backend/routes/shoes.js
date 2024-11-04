const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Đường dẫn tới tệp shoes.json
const dataPath = path.join(__dirname, '../data/shoes.json');

// Lấy danh sách giày
router.get('/', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(JSON.parse(data));
    });
});

// Thêm giày mới (không lưu vào tệp)
router.post('/', (req, res) => {
    // Chỉ cho ví dụ, không thực sự lưu vào tệp
    const newShoe = req.body;
    res.status(201).json(newShoe); // Trả về giày vừa thêm
});

module.exports = router;
