import connectDB from '../../lib/db';
import User from '../../models/user';


export default async (req, res) => {

  connectDB();

  if (req.method === 'GET') {
    try {
      const _id = req.query._id;
      if (_id) {
        const user = await User.findById(_id);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      } else {
        const users = await User.find();
        res.status(200).json(users);
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  } else if (req.method === 'POST') {
    const { firstname, lastname, email } = req.body;
    try {
      const newPost = new User({ firstname, lastname, email });
      await newPost.save();
      res.status(200).json(newPost);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { _id, firstname, lastname, email } = req.body;
      if (!_id) {
        return res.status(400).json({ error: 'Use Id is required for Update the User' });
      }
      const users = await User.findById(_id);
      if (!users) {
        return res.status(404).json({ error: 'User not found' });
      }
      users.firstname = firstname;
      users.lastname = lastname;
      users.email = email;
      await users.save();
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // const { _id } = req.body;
      const _id = req.query._id;
      console.log(_id,"______IIIIIDDDDD =====id")
      const deletedUser = await User.findByIdAndDelete(_id);
      if (deletedUser) {
        return res.status(200).json();
      } else {
        return res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server Error' });
    }
  }

}



