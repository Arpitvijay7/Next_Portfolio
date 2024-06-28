"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Message from ${name} for work enquiry`;
    const body = `${message}`;
    const mailtoLink = `mailto:arpitvijay2002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    
    window.open(mailtoLink, '_blank');
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder=" Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <User className=" absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea placeholder="Type Your Message Here." value={message} onChange={(e) => setMessage(e.target.value)} required/>
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]" type="submit">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
