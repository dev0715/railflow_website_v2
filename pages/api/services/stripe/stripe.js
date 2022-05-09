"use strict";

import stripe from "stripe";

import ApiError from "../../errors/api";
import logger from "../../config/logger";
/**
 * Service: Update an account
 * @param {*} email The customer eamil
 * @returns Promise
 */
const Stripe = new stripe(process.env.STRIPE_SECRET_KEY);

async function searchCustomer(email) {
  const customer = await Stripe.customers.search({
    query: `email:"${email}"`,
  });

  return customer.data;
}

async function searchInvoices(customerId) {
  const invoice = await Stripe.invoices.search({
    query: `customer:"${customerId}"`,
  });

  return invoice.data;
}

async function searchQuotes(customerId) {
  const quotesList = await Stripe.quotes.list({
    customer: customerId,
    status: "open",
  });

  return quotesList.data;
}

module.exports = {
  searchCustomer,
  searchInvoices,
  searchQuotes,
};