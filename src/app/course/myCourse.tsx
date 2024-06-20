'use client'

import { Card, CardBody } from "@nextui-org/card";
import { useState } from "react";

const MyCourse = () => {
  return (
    <div className="bg-gray-100 p-4 mb-8">
      <button className="font-mono hover:text-blue-800 cursor-pointer text-lg mb-4">
        Add Course
      </button>

      <Card>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>

    </div>
  );
};

export default MyCourse;
