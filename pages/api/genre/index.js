import { supabase } from '@libs/supabase';

export default async function handler(req, res) {
  const method = req.method
  const body = req.body

  switch (method) {
    case "GET":
      const { data } = await supabase.from('genre').select(`*`).order('id');
      res.status(200).json(data);
      break;

    case "POST":
      if (!body.name) {
        res.status(422).json({ error: "Name required" })
      } else {
        const { error } = await supabase
          .from('genre')
          .insert([{ name: body.name }])
        if (error) {
          res.status(422).json({ error: error.message })
        }
        res.status(200).json({ message: "Success add genre" });
      }
      break;

    case "PUT":
      if (!body.name) {
        res.status(422).json({ error: "Name required" })
      } else {
        const { error } = await supabase
          .from('genre')
          .update({ name: body.name })
          .eq('id', body.id)
        if (error) {
          res.status(422).json({ error: error.message })
        }
        res.status(201).json({ message: "Success update genre" });
      }
      break;

    case "DELETE":
      const { error } = await supabase
        .from('genre')
        .delete()
        .eq('id', body)
      if (error) {
        res.status(422).json({ error: error.message })
      }
      res.status(200).json({ message: "Success delete genre" });
      break;

    default:
      res.status(200).json("Method required");
      break;
  }
}
