import express from 'express';
import { createComplainValidation } from '../../validation/complainValidation';
import { ComplainModel } from './../../model/complainSchema';



// get all complain
export const getAllComplainController = async (req: express.Request, res: express.Response) => {
    try {
        const allComplain = await ComplainModel.find();
        return res.status(200).send({
            success: true,
            data: allComplain,
        });
    } catch (err) {
        console.log("Error creating new controller Catch block", err);
        res.status(500).send({
            success: false,
            details: "Error creating All controller Catch block",
        });
    }
};




// create one complain 
export const createNewComplainController = async (req: express.Request, res: express.Response) => {

    try {

        const { comPlainData } = req.body;


        if (!comPlainData) {
            return res.status(400).send({
                success: false,
                details: "Complain Data not pass by req.body",
            });
        }

        // check validation 
        const validationError = createComplainValidation(comPlainData);
        if (Object.keys(validationError).length > 0) {
            return res.status(400).send({
                success: false,
                details: "error on validation",
                error: validationError,
            });
        }

        // create a new complain 
        const newComplain = new ComplainModel(comPlainData)
        if (newComplain._id) {
            await newComplain.save();
            return res.status(200).send({
                success: true,
                data: newComplain,
            });
        }
        else {
            return res.status(400).send({
                success: false,
                data: "what the F. complain not save in DB.",
            });
        }


    } catch (error) {
        console.log("Error creating new controller Catch block ::::>>>:::", error, "::::<<::::");
        res.status(500).send({
            success: false,
            details: "Error creating new controller Catch block",
            error,
        });
    }
}




// update one complain

// delete one complain 