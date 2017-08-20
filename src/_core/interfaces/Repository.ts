export interface Repository {
    create(body);
    find(...args);
    findById(...args);
    update(...args);
    remove(...args);
}