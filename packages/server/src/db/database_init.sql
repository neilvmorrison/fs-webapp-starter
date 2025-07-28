--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5 (Postgres.app)
-- Dumped by pg_dump version 17.5 (Postgres.app)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: auth; Type: SCHEMA; Schema: -; Owner: neilmorrison
--

CREATE SCHEMA auth;


ALTER SCHEMA auth OWNER TO neilmorrison;

--
-- Name: create_user_profile_on_signup(); Type: FUNCTION; Schema: public; Owner: neilmorrison
--

CREATE FUNCTION public.create_user_profile_on_signup() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
	insert into user_profiles (email, auth_user_id) values (new.email, new.id);
	return new;
end;
$$;


ALTER FUNCTION public.create_user_profile_on_signup() OWNER TO neilmorrison;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: auth; Owner: neilmorrison
--

CREATE TABLE auth.sessions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    expires_at timestamp with time zone NOT NULL,
    is_revoked boolean DEFAULT false,
    auth_user_id uuid NOT NULL,
    token_hash text NOT NULL
);


ALTER TABLE auth.sessions OWNER TO neilmorrison;

--
-- Name: users; Type: TABLE; Schema: auth; Owner: neilmorrison
--

CREATE TABLE auth.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    deleted_at timestamp with time zone,
    email text NOT NULL,
    password_hash text NOT NULL,
    last_logged_in timestamp with time zone,
    email_verified boolean DEFAULT false
);


ALTER TABLE auth.users OWNER TO neilmorrison;

--
-- Name: user_profiles; Type: TABLE; Schema: public; Owner: neilmorrison
--

CREATE TABLE public.user_profiles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    auth_user_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    deleted_at timestamp with time zone,
    first_name text,
    last_name text,
    middle_name text,
    birthdate timestamp without time zone,
    email text NOT NULL,
    avatar_url text
);


ALTER TABLE public.user_profiles OWNER TO neilmorrison;

--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: neilmorrison
--

COPY auth.sessions (id, created_at, expires_at, is_revoked, auth_user_id, token_hash) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: neilmorrison
--

COPY auth.users (id, created_at, updated_at, deleted_at, email, password_hash, last_logged_in, email_verified) FROM stdin;
3c9195da-f415-4420-8464-d47ff762b9e3	2025-07-28 16:26:27.659939-04	2025-07-28 16:26:27.659939-04	\N	test@neat.com	123asd	\N	f
\.


--
-- Data for Name: user_profiles; Type: TABLE DATA; Schema: public; Owner: neilmorrison
--

COPY public.user_profiles (id, auth_user_id, created_at, updated_at, deleted_at, first_name, last_name, middle_name, birthdate, email, avatar_url) FROM stdin;
eeaef331-4485-4305-9d64-986e2b23feee	3c9195da-f415-4420-8464-d47ff762b9e3	2025-07-28 16:26:27.659939-04	2025-07-28 16:26:27.659939-04	\N	\N	\N	\N	\N	test@neat.com	\N
\.


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: auth; Owner: neilmorrison
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: users unique_email; Type: CONSTRAINT; Schema: auth; Owner: neilmorrison
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT unique_email UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: auth; Owner: neilmorrison
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: user_profiles user_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: neilmorrison
--

ALTER TABLE ONLY public.user_profiles
    ADD CONSTRAINT user_profiles_pkey PRIMARY KEY (id);


--
-- Name: auth_user_email; Type: INDEX; Schema: auth; Owner: neilmorrison
--

CREATE INDEX auth_user_email ON auth.users USING btree (email);


--
-- Name: auth_user_id; Type: INDEX; Schema: auth; Owner: neilmorrison
--

CREATE INDEX auth_user_id ON auth.sessions USING btree (auth_user_id);


--
-- Name: auth_user_id; Type: INDEX; Schema: public; Owner: neilmorrison
--

CREATE INDEX auth_user_id ON public.user_profiles USING btree (auth_user_id);


--
-- Name: email; Type: INDEX; Schema: public; Owner: neilmorrison
--

CREATE INDEX email ON public.user_profiles USING btree (email);


--
-- Name: users trg_create_user_profile; Type: TRIGGER; Schema: auth; Owner: neilmorrison
--

CREATE TRIGGER trg_create_user_profile AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.create_user_profile_on_signup();


--
-- Name: sessions sessions_auth_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: neilmorrison
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_auth_user_id_fkey FOREIGN KEY (auth_user_id) REFERENCES auth.users(id);


--
-- Name: user_profiles user_profiles_auth_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neilmorrison
--

ALTER TABLE ONLY public.user_profiles
    ADD CONSTRAINT user_profiles_auth_user_id_fkey FOREIGN KEY (auth_user_id) REFERENCES auth.users(id);


--
-- PostgreSQL database dump complete
--

