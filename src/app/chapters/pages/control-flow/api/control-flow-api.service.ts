import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable, delay, map, of } from 'rxjs'
import { Post, PostResponse, User, UserResponse } from '../types/control-flow.types'

@Injectable({ providedIn: 'root' })
export class ControlFlowApiService {
	#baseUrl = 'https://jsonplaceholder.typicode.com'
	#http = inject(HttpClient)

	getPosts$(): Observable<PostResponse> {
		return this.#http.get<Post[]>(`${this.#baseUrl}/posts`).pipe(
			delay(1000),
			map(data => {
				return {
					payload: data,
					type: 'posts'
				}
			})
		)
	}

	getUsers$(): Observable<UserResponse> {
		return this.#http.get<User[]>(`${this.#baseUrl}/users`).pipe(
			delay(1000),
			map(data => {
				return {
					payload: data,
					type: 'users'
				}
			})
		)
	}
}
