var userdetails = require('../Models/user_model');


module.exports.getall_user = function (callback) {
   userdetails.find(function (err, sch_detail) {
    if (err) {
        callback(err);
    }
    else {
        callback(sch_detail);
    }
})

};

module.exports.update_user = function (sch_detail, callback) {
  userdetails.findOneAndUpdate({ _id: sch_detail._id },
    {
      $set: sch_detail
    }, { upsert: true, new: true }, function (err, sch_detail) {
      if (err) {
        callback(err);
      }
      else {
        callback(sch_detail);
      }
    });
};

module.exports.delete_user = function (sch_detail_id, callback) {
  userdetails.findByIdAndRemove(sch_detail_id, function (err, sch_detail_id) {
    if (err) {
      callback(err);
    }
    else {
      callback({ message: "removed", userid: sch_detail_id });
    }
  });
};

exports.findById = function (userid, callback) {
  console.log("---user dao find by id------------------- > " + userid)
  userdetails.findById({ _id: userid }, function (err, userdata) {
    if (err) {
      callback(err);
    }
    else {
      callback(userdata);
    }
  });
};


module.exports.changeUserPrivilage = function (UserData, callback) {
  userdetails.findOneAndUpdate({ _id: UserData.userid },
    {
      $set: UserData
    }, { upsert: true, new: true }, function (err, newd) {
      if (err) {
        callback(err);
      }
      callback(newd);

    })
}