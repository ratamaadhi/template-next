// Next.jsx API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).jsxon({ name: 'John Doe' });
}
