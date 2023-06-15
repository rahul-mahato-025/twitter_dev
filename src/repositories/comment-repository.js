const Comment = require("../models/comment");
const CrudRepository = require("./crud-repository");

class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
    this.crudRepository = new CrudRepository();
  }
}
module.exports = CommentRepository;
