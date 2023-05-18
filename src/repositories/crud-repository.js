class CrudRepository {
  constructor(modelType) {
    this.model = modelType;
  }

  async create(data) {
    try {
      const res = await this.model.create(data);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      await this.model.findByIdAndRemove(id);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const res = await this.model.findById(id);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      const res = await this.model.findByIdAndUpdate(id, data, { new: true });
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CrudRepository;
