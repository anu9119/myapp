"use client";

import { emailSchema } from "@/types/email";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "../ui/use-toast";

export function ContactSection() {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      subject: "",
      content: "",
    },
  });

  async function onSubmitEmail(values: z.infer<typeof emailSchema>) {
    const data = {
      email: values.email,
      subject: values.subject,
      message: values.content,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "https://api.dataelevation.dev/api/mail";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      toast({
        variant: "default",
        title: "Sending email",
        description: "Email has been sended with success",
        duration: 7500
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Sending email",
        description:
          "Error while sending email, please contact schoumiloff@icloud.com",
      });
    }
  }

  return (
    <section id="contact">
      <div className="container mt-10 mb-16 flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-2/5">
          <h2 className="scroll-m-20 text-4xl font-extrabold mb-4">
            Let&apos;s connect
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I'm constantly looking for opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
          <div className="flex justify-start space-x-4 pt-4">
            <Instagram className="cursor-pointer h-10 w-10" />
            <Twitter
              className="cursor-pointer h-10 w-10"
              onClick={() =>
                window.open("https://x.com/SachaChoumiloff", "_blank")
              }
            />
            <Linkedin
              className="cursor-pointer h-10 w-10"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sachachoumiloff",
                  "_blank"
                )
              }
            />
            <Github
              className="cursor-pointer h-10 w-10"
              onClick={() =>
                window.open("https://github.com/SChoumiloff", "_blank")
              }
            />
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(onSubmitEmail)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="schoumiloff@dataelevation.dev"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="juste say hi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Let's talk about..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <Button type="submit">Send</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
