export default function handler(req, res) {
    if (req.method === 'GET') {
      const jobs = [
        { id: 1, title: 'Security Officer' },
        { id: 2, title: 'Event Security Specialist' }
      ];
      res.status(200).json(jobs);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  