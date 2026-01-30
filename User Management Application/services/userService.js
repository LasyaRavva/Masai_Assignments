const supabase = require('../config/supabaseClient');
const bcrypt = require('bcryptjs');

const createUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const { data, error } = await supabase.from('users').insert([{ ...user, password: hashedPassword }]).select();
  if (error) throw error;
  return data[0];
};

const getAllUsers = async () => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
};

const getUserById = async (id) => {
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  if (error) throw error;
  if (!data) throw new Error('User not found');
  return data;
};

const updateUser = async (id, updates) => {
  if (updates.password) updates.password = await bcrypt.hash(updates.password, 10);
  const { data, error } = await supabase.from('users').update(updates).eq('id', id).select();
  if (error) throw error;
  if (!data.length) throw new Error('User not found');
  return data[0];
};

const deleteUser = async (id) => {
  const { error } = await supabase.from('users').delete().eq('id', id);
  if (error) throw error;
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };