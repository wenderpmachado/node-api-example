export interface Controller {
    create(req, res, next);
    find(req, res, next);
    findById(req, res, next);
    update(req, res, next);
    remove(req, res, next);
}