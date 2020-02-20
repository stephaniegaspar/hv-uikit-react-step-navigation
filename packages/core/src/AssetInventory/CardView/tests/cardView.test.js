/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { mount, shallow } from "enzyme";
import Menu from "@hv/uikit-react-icons/dist/Generic/Menu";
import HvProvider from "../../../Provider";
import CardView from "../index";
import Card from "../../../Card";

describe("CardView", () => {
  let wrapper;

  const data = [
    {
      headerTitle: "Asset Avatar 1",
      subheader: "Compressor",
      id: "id_1",
      semantic: "sema2",
      isSelectable: true,
      checkboxValue: "id_1"
    },
    {
      headerTitle: "Asset Avatar 2",
      subheader: "Compressor",
      id: "id_2",
      semantic: "sema2",
      isSelectable: true,
      checkboxValue: "id_2"
    }
  ];

  beforeEach(() => {
    wrapper = shallow(
      <HvProvider>
        <CardView values={data} />
      </HvProvider>
    );
  });

  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly with default render", () => {
    wrapper = mount(
      <HvProvider>
        <CardView icon={<Menu />} values={data} />
      </HvProvider>
    );
    const cards = wrapper.find(Card);

    expect(cards.length).toEqual(2);
  });

  it("should render correctly with custom render", () => {
    const renderer = value => (
      <div style={{ width: "500px" }}>
        <Card id={value.id} headerTitle={value.headerTitle} />
      </div>
    );

    wrapper = mount(
      <HvProvider>
        <CardView id="id1" icon={<Menu />} values={data} renderer={renderer} />
      </HvProvider>
    );
    const cards = wrapper.find(Card);

    expect(cards.length).toEqual(2);
  });
});
