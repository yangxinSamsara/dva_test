export default {
    'GET /mock_api/mockdata': (req, res) => {
        res.send({
            code: 0,
            data: {
                messagge: '获取成功'
            }
        })
    }
}