"use client";

import React from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

const MyCourse = () => {

  return (
    <div className="bg-gray-100 p-4 mb-8">
      <button className="font-mono hover:text-blue-800 cursor-pointer text-lg mb-4">
        Add Course
      </button>

      <div className="p-4">
        <Card className="">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Username</p>
              <p className="text-small text-default-500">Email</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>

      
    </div>
  );
};

export default MyCourse;
