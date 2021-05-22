import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// requesting wines

export function getAllPosts() {
  return axios.get(`${baseUrl}/posts/all`)
}

export function getSingleUser(userId) {
  return axios.get(`${baseUrl}/profile/${userId}`)
}

export function createPost(formdata) {
  return axios.post(`${baseUrl}/posts`, formdata, headers())
}

export function createComment(postId, formdata) {
  return axios.post(`${baseUrl}/posts/${postId}`, formdata, headers())
}

export function createFollower(userId, formdata) {
  return axios.post(`${baseUrl}/profile/${userId}`, formdata, headers())
}

export function deletePost(postId) {
  return axios.delete(`${baseUrl}/posts/${postId}`, headers())
}

export function editPost(postId, formdata) {
  return axios.put(`${baseUrl}/posts/${postId}`, formdata, headers())
}



// auth requests

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}