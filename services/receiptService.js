import api from './api';

export const uploadReceipt = async (fileData) => {

  const formData = new FormData();

  formData.append('file', {
    uri: fileData.uri,
    type: fileData.type || 'image/jpeg',
    name: fileData.fileName || 'receipt.jpg',
  });

  const response = await api.post(
    '/receipts/upload',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data;

};

export const processReceipt = async (
  attachmentId
) => {

  const response = await api.post(
    `/receipts/attachments/${attachmentId}/process`
  );

  return response.data;

};

export const createInvoice = async (
  attachmentId
) => {

  const response = await api.post(
    `/receipts/attachments/${attachmentId}/create-invoice`
  );

  return response.data;

};
export const deleteAttachment = async (
  attachmentId
) => {

  const response =
    await api.delete(
      `/receipts/attachments/${attachmentId}`
    );

  return response.data;

};
export const updateInvoiceCategory =
async (
  invoiceId,
  categorieId
) => {

  const response =
    await api.put(
      `/receipts/${invoiceId}/update-category`,
      {
        categorie_id:
          categorieId
      }
    );

  return response.data;

};

export const deleteReceipt =
async (
  invoiceId
) => {

  const response =
    await api.delete(
      `/receipts/${invoiceId}`
    );

  return response.data;

};