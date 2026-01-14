import { Router, Request, Response } from 'express';

export const contactRouter = Router();

contactRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
    
    // In a real application, you would send an email here or store via ORM
    console.log('Contact form submission:', { name, email, message });
    
    // Simulate successful processing
    res.status(200).json({ success: true, message: 'Message received' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, error: 'Failed to process message' });
  }
});
