class controllerCommon {

    findSuccess(res) {
        return (result) => {
            res.status(200);
            res.json(result);
        }
    }

    existsSuccess(res) {
        return (result) => {
            res.status(200);
            res.json(result);
        }
    }

    editSuccess(res) {
        return () => {
            res.status(201);
            res.json({});
        }
    }

    serverError(res) {
        return (error) => {
            res.status(500);
            console.log(error);
            res.json(error);
        }
    }

    findError(res) {
        return (error) => {
            res.status(404);
            console.log(res);
            res.json(error);
        }
    }
}

module.exports = controllerCommon;