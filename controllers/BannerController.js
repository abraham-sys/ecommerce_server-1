const { Banner } = require("../models");

class BannerController {
  static async allBanner(req, res, next) {
    try {
      const foundAllBanner = await Banner.findAll({
        order: [['id', 'ASC']]
      });
      res.status(200).json({ foundAllBanner });
    } catch (err) {
      next(err);
    }
  }

  static async addBanner(req, res, next) {
    const { title, status, image_url } = req.body;
    try {
      await Banner.create({
        title,
        status,
        image_url
      });
      res.status(201).json({ msg: "Banner is successfully created" });
    } catch (err) {
      next(err);
    }
  }

  static async getOneBanner(req, res, next) {
    const bannerId = +req.params.id;

    try {
      const foundBanner = await Banner.findOne({
        where: {
          id: bannerId
        }
      });
      if(foundBanner) res.status(200).json({ foundBanner });
      else {
        throw {msg: "Banner not found", status: 404 }
      }
    } catch (err) {
      next(err);
    }
  }

  static async updateBanner (req, res, next) {
    const { title, status, image_url } = req.body;
    const bannerId = +req.params.id;

    try {
      await Banner.update(
        { title, status, image_url },
        {
          where: {
            id: bannerId,
          },
        }
      );
      res.status(200).json({ msg: "Banner is successfully updated!" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteBanner(req, res, next) {
    const bannerId = +req.params.id;

    try {
      await Banner.destroy({ where: { id: bannerId } });
      res.status(200).json({ msg: "Banner is successfully deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = BannerController;
