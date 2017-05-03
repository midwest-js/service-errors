
--
-- Name: errors; Type: TABLE; Schema: public; Owner: millerkonsult_supreme
--

CREATE TABLE errors (
    id integer NOT NULL,
    body jsonb,
    column_number integer,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    description text,
    details jsonb,
    filename text,
    ip text,
    line_number integer,
    method text,
    message text,
    name text,
    path text,
    query jsonb,
    session jsonb,
    stack text,
    status integer,
    status_text text,
    user_id integer,
    user_agent text,
    xhr boolean
);


--
-- Name: errors_id_seq; Type: SEQUENCE; Schema: public; Owner: millerkonsult_supreme
--

CREATE SEQUENCE errors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: errors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: millerkonsult_supreme
--

ALTER SEQUENCE errors_id_seq OWNED BY errors.id;


--
-- Name: errors id; Type: DEFAULT; Schema: public; Owner: millerkonsult_supreme
--

ALTER TABLE ONLY errors ALTER COLUMN id SET DEFAULT nextval('errors_id_seq'::regclass);

--
-- Name: errors errors_pkey; Type: CONSTRAINT; Schema: public; Owner: millerkonsult_supreme
--

ALTER TABLE ONLY errors
    ADD CONSTRAINT errors_pkey PRIMARY KEY (id);


--
-- Name: errors errors_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: millerkonsult_supreme
--

ALTER TABLE ONLY errors
    ADD CONSTRAINT errors_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL;


